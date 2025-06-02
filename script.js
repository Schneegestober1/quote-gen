const quote = document.getElementById('quote')
const author = document.getElementById('author')

const api_url = 'https://quotes-api-self.vercel.app/quote'

async function getQuote(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        quote.innerHTML = data.quote
        author.innerHTML = data.author

    } catch (error) {
        console.error('Error fetching the quote:', error);
    }
}
getQuote(api_url)

function vk(){
    window.open('https://vk.com/share.php?url=http://' +  quote.innerHTML + '--- by ' + author.innerHTML, "Vk Window", 'width=100, height=100')
}

