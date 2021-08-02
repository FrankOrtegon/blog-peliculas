package co.com.sofka.mongo.entity;

import co.com.sofka.model.count.values.IdCount;
import co.com.sofka.model.publication.Category;
import co.com.sofka.model.publication.values.IdPublication;
import co.com.sofka.model.publication.values.Text;
import co.com.sofka.model.publication.values.Title;
import co.com.sofka.model.publication.values.Vote;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class PublicationEntity {

    @Id
    private String idPublication;
    private IdCount idCount;
    private Category category;
    private Title title;
    private Text text;
    private Integer vote;

    public PublicationEntity() {
    }

    public PublicationEntity(String idPublication, IdCount idCount, Category category, Title title, Text text, Integer vote) {
        this.idPublication = idPublication;
        this.idCount = idCount;
        this.category = category;
        this.title = title;
        this.text = text;
        this.vote = vote;
    }

    public String getIdPublication() {
        return idPublication;
    }

    public void setIdPublication(String idPublication) {
        this.idPublication = idPublication;
    }

    public IdCount getIdCount() {
        return idCount;
    }

    public void setIdCount(IdCount idCount) {
        this.idCount = idCount;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Title getTitle() {
        return title;
    }

    public void setTitle(Title title) {
        this.title = title;
    }

    public Text getText() {
        return text;
    }

    public void setText(Text text) {
        this.text = text;
    }

    public Integer getVote() {
        return vote;
    }

    public void setVote(Integer vote) {
        this.vote = vote;
    }
}
