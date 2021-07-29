package co.com.sofka.usecase.count;

import co.com.sofka.model.count.Count;
import co.com.sofka.model.count.gateways.CountRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class AddCountUseCase {

    private final CountRepository countRepository;

    public Count addCount(Count count) {
        return countRepository.addCount(count);
    }

}
