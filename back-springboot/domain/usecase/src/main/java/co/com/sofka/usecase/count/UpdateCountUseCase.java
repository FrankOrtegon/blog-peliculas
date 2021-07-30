package co.com.sofka.usecase.count;

import co.com.sofka.model.count.Count;
import co.com.sofka.model.count.gateways.CountRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class UpdateCountUseCase {
    private final CountRepository countRepository;

    public Count updateCount(Count count) {
        return countRepository.updateCount(count);
    }
}
