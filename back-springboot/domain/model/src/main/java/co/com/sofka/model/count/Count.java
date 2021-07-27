package co.com.sofka.model.count;
import co.com.sofka.model.count.values.Email;
import co.com.sofka.model.count.values.IdCount;
import co.com.sofka.model.count.values.IdUser;
import co.com.sofka.model.count.values.Plan;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Count {

    private IdCount idCount;
    private IdUser idUser;
    private Email email;
    private Plan plan;

    public Count() {
    }

    public Count(IdCount idCount, IdUser idUser, Email email, Plan plan) {
        this.idCount = idCount;
        this.idUser = idUser;
        this.email = email;
        this.plan = plan;
    }
}
