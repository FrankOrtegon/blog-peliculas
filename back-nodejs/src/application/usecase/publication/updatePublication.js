async function updatePublication(id, name, category, description, publicationRepository) {
    let publicationModific = {_id:id, name:name, category:category, description:description}
    const modifiedPublication = await publicationRepository.updatePublication(publicationModific);
    
    return modifiedPublication
}

module.exports = { updatePublication };
