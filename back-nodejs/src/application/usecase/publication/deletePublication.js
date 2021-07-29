async function deletePublication(id, publicationRepository) {
  
  return await publicationRepository.delete(id);
}

module.exports = { deletePublication };