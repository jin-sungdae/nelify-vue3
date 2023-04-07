exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'SUNGDAE',
            age: 25,
            crew: 1,
            email: 'wlstjdeo00@gmail.com'
        })
    }
}