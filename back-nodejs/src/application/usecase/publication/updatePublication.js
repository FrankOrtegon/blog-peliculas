async function updatePublication(id, name, category, description, image, publicationRepository) {
    let publicationModific = {_id:id, name:name, category:category, description:description, image:image}
    const modifiedPublication = await publicationRepository.updatePublication(publicationModific);
    
    return modifiedPublication
}

module.exports = { updatePublication };
