const puppeteer = require('puppeteer-core');

test('La página debe tener un título "Hola Mundo"', async () => {
    const browser = await puppeteer.launch({
        executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe' // Asegúrate de que esta ruta sea correcta para tu sistema
    });
    const page = await browser.newPage();
    await page.goto(`file://${__dirname}/../index.html`);
    const title = await page.title();
    expect(title).toBe('Hola Mundo');
    await browser.close();
});
