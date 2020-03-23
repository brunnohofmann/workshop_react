export function fetchFake (url, data) {
    setTimeout(() => {
        return {
            name: 'ThoughWorker already exist member',
            email: 'memberWorkShop@thoughtworks.com'
        }
    }, 2000);
}