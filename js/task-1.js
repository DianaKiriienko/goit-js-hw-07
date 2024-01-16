const categoryCount = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoryCount.length}`);

categoryCount.forEach((category) => {
    const title = category.querySelector("h2").innerText;
    const item = category.querySelectorAll("li").length
    console.log(`Category: ${title}`);
    console.log(`Elements: ${item}`);
});