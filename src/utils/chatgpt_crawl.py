import asyncio
from playwright.async_api import async_playwright, Playwright

from utils.constants import user_agents


async def fetch_page(browser, url):
    pass

async def obtain_from_chatgpt_sharing(url, mention):
    
async def run(playwright: Playwright):
    firefox = playwright.firefox
    browser = await firefox.launch(headless=True)
    #TODO: Here we call fetch_page 

    await browser.close()

async def main():
    async with async_playwright() as playwright:
        await run(playwright)

asyncio.run(main())