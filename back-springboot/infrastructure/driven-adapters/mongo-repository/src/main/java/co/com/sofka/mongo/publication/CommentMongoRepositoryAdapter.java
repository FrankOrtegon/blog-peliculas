package co.com.sofka.mongo.publication;

import co.com.sofka.model.publication.Comment;
import co.com.sofka.model.publication.gateways.PublicationRepository;
import co.com.sofka.mongo.entity.CommentEntity;
import co.com.sofka.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class CommentMongoRepositoryAdapter extends AdapterOperations<CommentEntity,CommentEntity, String, CommentMongoDBRepository>
implements PublicationRepository
{

    public CommentMongoRepositoryAdapter(CommentMongoDBRepository repository, ObjectMapper mapper) {
        /**
         *  Could be use mapper.mapBuilder if your domain model implement builder pattern
         *  super(repository, mapper, d -> mapper.mapBuilder(d,ObjectModel.ObjectModelBuilder.class).build());
         *  Or using mapper.map with the class of the object model
         */
        super(repository, mapper, d -> mapper.map(d, CommentEntity.class));
    }



    @Override
    public Comment addComment(Comment comment) {
        CommentEntity commentEntity = new CommentEntity(comment.getIdPublication(), comment.getIdCount(), comment.getContent());
        this.repository.save(commentEntity);
        Comment commentary = comment;
        commentary.setIdComment(commentEntity.getIdComment());
        return commentary;
    }

    @Override
    public void deleteByIdComment(String id) {

        this.repository.deleteById(id);
    }

    @Override
    public Comment findByIdComment(String id){

       Optional<CommentEntity> commentEntity = this.repository.findById(id);
        Comment comment = new Comment(commentEntity.get().getIdComment(),commentEntity.get().getIdPublication(),commentEntity.get().getIdCount(),commentEntity.get().getContent());
        return comment;
    }

}
