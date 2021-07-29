async function  deletePublication (id, publicationRepository){
  return publicationRepository.remove(id);
}
module.exports={deletePublication} 