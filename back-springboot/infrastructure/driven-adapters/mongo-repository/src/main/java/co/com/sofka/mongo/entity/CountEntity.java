package co.com.sofka.mongo.entity;

import co.com.sofka.model.count.values.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class CountEntity {

    @Id
    private IdCount idCount;
    private Name name;
    private Phone phone;
    private Plan plan;

    public CountEntity() {

    }

    public CountEntity(IdCount idCount, Name name, Phone phone, Plan plan) {
        this.idCount = idCount;
        this.name = name;
        this.phone = phone;
        this.plan = plan;
    }

    public IdCount getIdCount() {
        return idCount;
    }

    public void setIdCount(IdCount idCount) {
        this.idCount = idCount;
    }

    public Name getName() {
        return name;
    }

    public void setName(Name name) {
        this.name = name;
    }

    public Phone getPhone() {
        return phone;
    }

    public void setPhone(Phone phone) {
        this.phone = phone;
    }

    public Plan getPlan() {
        return plan;
    }

    public void setPlan(Plan plan) {
        this.plan = plan;
    }
}
