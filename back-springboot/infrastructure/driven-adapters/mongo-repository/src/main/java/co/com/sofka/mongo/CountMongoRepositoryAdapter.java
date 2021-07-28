package co.com.sofka.mongo;

import co.com.sofka.model.count.Count;
import co.com.sofka.model.count.gateways.CountRepository;
import co.com.sofka.mongo.entity.CountEntity;
import co.com.sofka.mongo.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

@Repository
public class CountMongoRepositoryAdapter extends AdapterOperations<CountEntity, CountEntity, String, CountMongoDBRepository>
implements CountRepository {

    public CountMongoRepositoryAdapter(CountMongoDBRepository repository, ObjectMapper mapper) {
        super(repository, mapper,  d -> mapper.map(d, CountEntity.class));
    }

    @Override
    public Count addCount(Count count) {
        CountEntity countEntity = new CountEntity(
                count.getIdCount(),
                count.getName(),
                count.getPhone(),
                count.getPlan()
        );
        this.repository.save(countEntity);
        return count;
    }

}
