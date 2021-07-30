package co.com.sofka.model.count.gateways;

import co.com.sofka.model.count.Count;

public interface CountRepository {
    Count addCount(Count count);
    Count updateCount(Count count);
    Count getCount(String idCount);
}
