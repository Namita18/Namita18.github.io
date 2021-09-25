        function play(sound){
          var audio = document.getElementById("A");
          audio.setAttribute('src', sound);
          audio.play();
        }
        function pause(sound){
          var audio = document.getElementById("A");
          audio.setAttribute('src', sound);
          audio.pause();
        }

        var vol = document.getElementById("A");

        function volume() { 
            alert(vol.volume);
        } 
          
        function Set_vol1() { 
            vol.volume = 0.2;
        } 
          
        function Set_vol2() { 
          
            vol.volume = 1.0;

        } 