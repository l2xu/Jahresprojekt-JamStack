/*const { faker } = require("@faker-js/faker");

// 1
async function seedArticlesCollection() {
    const numberOfRecordsToCreate = 207;

    // 2
    for (let i = 0; i < numberOfRecordsToCreate; i++) {
        // 3
        await strapi.api.article.services.article.create({
            data: {
                title: faker.lorem.words(),
                description: faker.lorem.sentence(),
            },
        });
    }

    console.log(`Added ${numberOfRecordsToCreate} records`);
}

module.exports = { seedArticlesCollection };*/