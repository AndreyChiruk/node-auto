const puppeteer = require('puppeteer');

async function takeScreenshotWithTimer() {
  const browser = await puppeteer.launch({ headless: false , ignoreDefaultArgs: ['--disable-extensions'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 720 });


  try {
    await page.goto('https://monopoly.online/cargoes/available', { waitUntil: 'networkidle2' });

    await page.waitForSelector('.fr8fcdx.fs89ngr.ym-disable-keys');
    await page.type('.fr8fcdx.fs89ngr.ym-disable-keys', 'asholomitckii@gmail.com');
    await page.waitForSelector('.fr8v81y.fs3fg10.f9n8sg0.f96or0t');
    await page.click('.fr8v81y.fs3fg10.f9n8sg0.f96or0t');

    await page.waitForSelector('.fr8fcdx.fs89ngr.ym-disable-keys');
    await new Promise(resolve => setTimeout(resolve, 2000));
    await page.type('.fr8fcdx.fs89ngr.ym-disable-keys', 'Artemsholom2209!');
    await page.waitForSelector('.fr8v81y.fs3fg10.f9n8sg0.f96or0t');
    await page.click('.fr8v81y.fs3fg10.f9n8sg0.f96or0t');

    await new Promise(resolve => setTimeout(resolve, 6000));
    await page.waitForSelector('.fr8v81y.fs3fg10.fn6iz5s.f96or0t.button_frxzdj2');
    await page.click('.fr8v81y.fs3fg10.fn6iz5s.f96or0t.button_frxzdj2');

    await new Promise(resolve => setTimeout(resolve, 2000));
    await page.waitForSelector('.fr8v81y.fs3fg10.f1e2uwl1.f96or0t.helperButton_f1nzr65k');
    await page.click('.fr8v81y.fs3fg10.f1e2uwl1.f96or0t.helperButton_f1nzr65k');


    while(true){
        await new Promise(resolve => setTimeout(resolve, 2000));
        await page.waitForSelector('.f14ofwgi.f7pqr6.fs4vp0p', { timeout: 600000 });
        await page.click('.fr8v81y.fs3fg10.fn6iz5s.f96or0t');

        await page.waitForSelector('.styled-input_fr8fcdx.selectedTitle_fcx69nv.selectedTitleCropped_fs89ngr');
        await page.click('.styled-input_fr8fcdx.selectedTitle_fcx69nv.selectedTitleCropped_fs89ngr');

        await new Promise(resolve => setTimeout(resolve, 200));
        const elements = await page.$$('.fefr9gi');
        if (elements.length >= 4) {
            await elements[3].click(); 
        }

        await new Promise(resolve => setTimeout(resolve, 200));
        const elements1 = await page.$$('.f18aqlgd');
        if (elements1.length == 3) {
            await elements1[2].click();}
        else if(elements1.length == 2){
            await elements1[1].click();
        }

        await new Promise(resolve => setTimeout(resolve, 200));
        const elements2 = await page.$$('.styled-input_fr8fcdx.fs89ngr');
        await elements2[0].type('В 778 ЕО 797');
        await elements2[0].click();
        await page.waitForSelector('.resourceItem_f1nezq3y');
        await page.evaluate(() => {
            document.querySelector('.resourceItem_f1nezq3y').click();
        });
        
        await new Promise(resolve => setTimeout(resolve, 200));
        await elements2[1].type('BK 9896 77 RUS');
        await elements2[1].click();
        await page.waitForSelector('.resourceItem_f1nezq3y');
        await page.evaluate(() => {
            document.querySelector('.resourceItem_f1nezq3y').click();
        });
        
        await new Promise(resolve => setTimeout(resolve, 200));
        await elements2[2].type('Абакумов Алексей Юрьевич');
        await elements2[2].click();
        await page.waitForSelector('.resourceItem_f1nezq3y');
        await page.evaluate(() => {
            document.querySelector('.resourceItem_f1nezq3y').click();
        });
        
        await new Promise(resolve => setTimeout(resolve, 200));
        await page.click('.fr8v81y.fs3fg10.fn6iz5s.faksw1v');
        await page.waitForSelector('.card_f1pwnp65.card_ft28jno.fptdnp4', { timeout: 600000 });
    }
    
  } catch (error) {
    console.error('Произошла ошибка:', error);
    await browser.close();
  } finally {
    await browser.close();
  }

}

takeScreenshotWithTimer();


