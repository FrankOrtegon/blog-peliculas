package co.com.sofka.model.publication;
import co.com.sofka.model.count.values.IdCount;
import co.com.sofka.model.count.values.IdUser;
import co.com.sofka.model.publication.entity.Category;
import co.com.sofka.model.publication.values.IdCategory;
import co.com.sofka.model.publication.values.IdPublication;
import co.com.sofka.model.publication.values.Text;
import co.com.sofka.model.publication.values.Title;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Publication {

    private IdPublication idPublication;
    private IdCount idCount;
    private Category category;
    private Title title;
    private Text text;

    public Publication() {
    }

    public Publication(IdPublication idPublication, IdCount idCount, Category category, Title title, Text text) {
        this.idPublication = idPublication;
        this.idCount = idCount;
        this.category = category;
        this.title = title;
        this.text = text;
    }
}
