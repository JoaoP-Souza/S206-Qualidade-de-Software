package aula2_karate.pokemon;

import com.intuit.karate.junit5.Karate;

class pokeRunner {
    
    @Karate.Test
    Karate testAll() {
        return Karate.run("pokemon").relativeTo(getClass());
    }    

}
```