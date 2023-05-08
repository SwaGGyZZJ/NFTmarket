document.querySelector('.navbar .marketplace').click();

document.querySelector('.create-nft-button').click();

document.querySelector('#nft-name').value = 'My NFT';

const fileInput = document.querySelector('#nft-image');
fileInput.files = [new File(['img.png'], 'img.png', { type: 'image/png' })];

document.querySelector('.upload-button').click();


const signPrompt = await new Promise(resolve => {
  const interval = setInterval(() => {
    const prompt = document.querySelector('.metamask-prompt-sign');
    if (prompt) {
      clearInterval(interval);
      resolve(prompt);
    }
  }, 1000);
});
signPrompt.click();


document.querySelector('#eth-input').value = 10;
document.querySelector('.upload-button').click();

const signPrompt2 = await new Promise(resolve => {
  const interval = setInterval(() => {
    const prompt = document.querySelector('.metamask-prompt-sign');
    if (prompt) {
      clearInterval(interval);
      resolve(prompt);
    }
  }, 1000);
});
signPrompt2.click();


document.querySelector('.navbar .marketplace').click();


document.querySelector('.marketplace .nft:nth-of-type(1) .buy-button').click();

// Wait for the Metamask sign prompt to appear and click on Sign
const signPrompt3 = await new Promise(resolve => {
  const interval = setInterval(() => {
    const prompt = document.querySelector('.metamask-prompt-sign');
    if (prompt) {
      clearInterval(interval);
      resolve(prompt);
    }
  }, 1000);
});
signPrompt3.click();

document.querySelector('.navbar .profile').click();
