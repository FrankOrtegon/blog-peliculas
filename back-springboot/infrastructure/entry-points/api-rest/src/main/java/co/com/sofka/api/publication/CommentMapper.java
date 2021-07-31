package co.com.sofka.api.publication;

import co.com.sofka.model.publication.Comment;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Component
public class CommentMapper {

    public Comment fromToModel(CommentDTO commentDTO){
        Comment comment = new Comment();
        comment.setIdComment(commentDTO.getIdComment());
        comment.setIdPublication(commentDTO.getIdPublication());
        comment.setIdCount(commentDTO.getIdCount());
        comment.setContent(commentDTO.getContent());
        return comment;
    }

    public CommentDTO fromDTO(Comment comment){
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setIdComment(comment.getIdComment());
        commentDTO.setIdPublication(comment.getIdPublication());
        commentDTO.setIdCount(comment.getIdCount());
        commentDTO.setContent(comment.getContent());
        return commentDTO;
    }

    public List<CommentDTO> fromCommentList(List<Comment> collection) {
        if (collection == null) {
            return null;

        }
        List<CommentDTO> list = new ArrayList(collection.size());
        Iterator listTracks = collection.iterator();

        while(listTracks.hasNext()) {
            Comment comment = (Comment) listTracks.next();
            list.add(fromDTO(comment));
        }
        return list;
    }


}
