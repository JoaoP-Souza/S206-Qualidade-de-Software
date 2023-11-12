package aula1_karate.star_wars;

import com.intuit.karate.junit5.Karate;

class swRunner {
    
    @Karate.Test
    Karate testAll() {
        return Karate.run("star_wars").relativeTo(getClass());
    }    

}
```