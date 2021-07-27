package co.com.sofka.mongo;

import co.com.sofka.model.publication.entity.Comment;
import co.com.sofka.model.publication.gateways.PublicationRepository;
import co.com.sofka.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

@Repository
public class CommentMongoRepositoryAdapter extends AdapterOperations<Comment,Comment, String, CommentMongoDBRepository>
implements PublicationRepository
{

    public CommentMongoRepositoryAdapter(CommentMongoDBRepository repository, ObjectMapper mapper) {
        /**
         *  Could be use mapper.mapBuilder if your domain model implement builder pattern
         *  super(repository, mapper, d -> mapper.mapBuilder(d,ObjectModel.ObjectModelBuilder.class).build());
         *  Or using mapper.map with the class of the object model
         */
        super(repository, mapper, d -> mapper.map(d, Comment.class));
    }

    @Override
    public Comment addComment(Comment comment) {
        return this.repository.save(comment);
    }
}