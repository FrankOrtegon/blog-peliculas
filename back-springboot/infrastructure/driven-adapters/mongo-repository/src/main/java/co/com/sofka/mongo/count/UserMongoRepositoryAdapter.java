package co.com.sofka.mongo.count;

import co.com.sofka.model.count.User;
import co.com.sofka.model.count.gateways.UserRepository;
import co.com.sofka.mongo.entity.UserEntity;
import co.com.sofka.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;



@Repository
public class UserMongoRepositoryAdapter extends AdapterOperations<UserEntity, UserEntity, String, UserMongoDBRepository>
implements UserRepository {
    public UserMongoRepositoryAdapter(UserMongoDBRepository repository, ObjectMapper mapper) {
        super(repository, mapper,d -> mapper.map(d, UserEntity.class) );
    }

    @Override
    public User addUser(User user) {
        UserEntity userEntity = new UserEntity(
                user.getIdUser(),
                user.getEmail(),
                user.getUrlPhoto()
        );
        this.repository.save(userEntity);
        return user;
    }
}
