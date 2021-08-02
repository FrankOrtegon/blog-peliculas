package co.com.sofka.model.publication;
import co.com.sofka.model.count.values.IdCount;
import co.com.sofka.model.publication.values.IdPublication;
import co.com.sofka.model.publication.values.Text;
import co.com.sofka.model.publication.values.Title;
import co.com.sofka.model.publication.values.Vote;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Publication {

    private String idPublication;
    private IdCount idCount;
    private Category category;
    private Title title;
    private Text text;
    private Integer vote;

    public Publication() {
    }

    public Publication(String idPublication, IdCount idCount, Category category, Title title, Text text, Integer vote) {
        this.idPublication = idPublication;
        this.idCount = idCount;
        this.category = category;
        this.title = title;
        this.text = text;
        this.vote = vote;
    }
}
