
        //Global Variables
        var body = document.querySelector('body');
        var display = document.getElementById('display');

        var play = document.getElementById('start');
        play.addEventListener('click' , game_start);

        var red_player = document.getElementById("play_red");
        red_player.addEventListener('click' , play_red);

        var blue_player = document.getElementById("play_blue");
        blue_player.addEventListener('click' , play_blue);

        var first_block = document.getElementById('1');

        var p1 = document.createElement('p');
        p1.setAttribute('class' , 'player1');

        var p2 = document.createElement('p');
        p2.setAttribute('class' , 'player2');

        var count_red = 0;
        var count_blue = 0;

        function game_start(){

            //Starting Point
            first_block.appendChild(p1);
            first_block.appendChild(p2);
            count_red = 0;
            count_blue = 0;
        }

        function play_red() {
            //Dice Values
            var roll_value = random();

            if(count_red>=0 && count_red<=100){
                count_red = count_red + roll_value;
            }
            display.textContent = roll_value;

            //New Positions
            if(roll_value < 6 && roll_value > 1){
                var new_block = document.getElementById(count_red+1);
                new_block.appendChild(p1);
                if(new_block.textContent >= 100){
                    alert("Winner Winner !!! Chicken Dinner");
                }
            }

            snake();
            ladder();    
        }

        function play_blue() {
            //Dice Values
            var roll_value = random();

            if(count_blue>=0 && count_blue<=100){
                count_blue = count_blue + roll_value;
            }
            display.textContent = roll_value;

            console.log(count_blue);

            //New Positions
            if(roll_value < 6 && roll_value > 1){
                var new_block = document.getElementById(count_blue+1);
                new_block.appendChild(p2);
                if(new_block.textContent >= 100){
                    alert("Winner Winner !!! Chicken Dinner");
                }
            }

            snake();
            ladder();     
        }

        function random(){
            var max = 7;
            var min = 1;
            var ran = Math.floor(Math.random()*(max-min)+min);
            return ran;
        }

        function snake() {
            if(count_red == 65){
                var new_block = document.getElementById('25');
                new_block.appendChild(p1);
            }
            else if(count_blue == 65){
                var new_block = document.getElementById('25');
                new_block.appendChild(p2);
            }
            else if(count_red == 99) {
                var new_block = document.getElementById('80');
                new_block.appendChild(p1);
            }
            else if(count_blue == 99) {
                var new_block = document.getElementById('80');
                new_block.appendChild(p2);
            }
        }
        function ladder() {
            if(count_red == 7){
                var new_block = document.getElementById('47');
                new_block.appendChild(p1);
            }
            else if(count_blue == 7) {
                var new_block = document.getElementById('47');
                new_block.appendChild(p2);
            }
            else if(count_red == 23) {
                var new_block = document.getElementById('63');
                new_block.appendChild(p1);
            }
            else if(count_blue == 23) {
                var new_block = document.getElementById('63');
                new_block.appendChild(p2);
            }
            else if(count_red == 54) {
                var new_block = document.getElementById('94');
                new_block.appendChild(p1);
            }
            else if(count_blue == 54) {
                var new_block = document.getElementById('94');
                new_block.appendChild(p2);
            }
        }