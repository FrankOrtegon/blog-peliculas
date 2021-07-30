async function getByCategory(category, publicationRepository) {
    if (!category) {
        return {
            errorMessage: "La categoria es necesaria",
            success: false
        }
    }
    return await publicationRepository.findByCategory(category);
}

async function getPublication(publicationRepository) {
    return await publicationRepository.findAll();
}
module.exports = {getPublication, getByCategory}