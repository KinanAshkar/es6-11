// Ignoring The Pyramid Of Doom

const myPromise = new Promise((resolve, reject) => {
    let thePosts = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    resolve(thePosts);
});

myPromise.then(
    (result) => {
        console.log(`total number of posts is ${result.length}`);
        return result;
    }
).then(
    (result) => {
        console.log(`the first post is ${result[0]}`);
        return result;
    }
).then(
    (result) => {
        console.log(`the last post is ${result[result.length-1]}`);
        return result;
    }
).then(
    (result) => {
        console.log(`every page has two posts`);
        console.log(`application has ${result.length / 2} pages`);
    }
)