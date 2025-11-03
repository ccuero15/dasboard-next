import { NextRequest } from 'next/server';
import puppeteer, { Browser } from 'puppeteer';

export interface ScrapeResult {
  dolar: string;
  euro: string
}

export interface ScrapeError {
    error: string;
    details?: string;
}

// Función auxiliar para cerrar el navegador
async function closeBrowser(browser: Browser | null) {
    if (browser) {
        try {
            await browser.close();
        } catch (error) {
            console.error('Error closing browser:', error);
        }
    }
}

export async function POST(request: NextRequest) {
    let browser: Browser | null = null;

    try {
        const { url } = await request.json();

        if (!url) {
            return Response.json(
                { error: 'URL is required' },
                { status: 400 }
            );
        }

        try {
            new URL(url);
        } catch {
            return Response.json(
                { error: 'Invalid URL format' },
                { status: 400 }
            );
        }

        browser = await puppeteer.launch({
            headless: true,
            args: [ '--no-sandbox', '--disable-setuid-sandbox' ]
        });

        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

        await page.goto(url, {
            waitUntil: 'networkidle2',
            timeout: 30000
        });

        // Esperar a que el elemento con id "dolar" esté presente
        await page.waitForSelector('#dolar');

        // Extraer el texto dentro del strong dentro de #dolar
        const dolarValue = await page.$eval('#dolar strong', (el) => {
            return el.textContent ? el.textContent.trim() : '';
        });
        const euroValue = await page.$eval('#euro strong', (el) => {
            return el.textContent ? el.textContent.trim() : '';
        });

        await closeBrowser(browser);

        const result: ScrapeResult = {
            dolar: dolarValue,
            euro: euroValue
        };

        return Response.json(result, { status: 200 });

    } catch (error) {
        await closeBrowser(browser);

        console.error('Scraping error:', error);

        const errorResponse: ScrapeError = {
            error: 'Failed to scrape website',
            details: error instanceof Error ? error.message : 'Unknown error'
        };

        return Response.json(errorResponse, { status: 500 });
    }
}