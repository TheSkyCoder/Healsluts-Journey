// Note: "game" == "mission". The naming scheme is somewhat fucked up
// During the prototyping phase. Eventually that should be fixed...

// ============= Some global variables to get us started =============

    // The game initially sets itself to "easy mode"
    // This can be changed at the welcome screen.
    var gameMode = "easy";
    var scoremod_objfail_gamelost = -1;
    var scoremod_objfail_gamewon = 1;
    var scoremod_objpass_gamelost = 1;
    var scoremod_objpass_gamewon = 2;

    // Current, winning and losing scores
    // in the future this might be changeable
    // from the welcome screen as well.
    var winning_score = 5;
    var losing_score = -5;
    var current_score = 0;

    // All the "missions" available:
    var missions = [
        "spanking_time",
        "ride_it",
        "resurrection_slut",
        "tit_abuse",
        "extreme_spankings",
        "footjob_time",
        "suck_them_all",
        "slut_it_up",
        "gag_on_it",
        "body_writing",
        "swallow_it",
        "time_for_a_facial",
        "ride_it_hard",
        "double_blowjob",
        "healslut_brainwashing",
        "take_it_deep",
        "double_penetration",
        "twin_blowjob",
        "get_messy",
        "edging"
    ];

    // Rewards and punishments!
    var game_end_rewards = [
        "Unlock chastity cage/belt, jack off while sucking on a dildo. Edge 5 times, deepthroating on each edge. Cum into mouth.",
        "Unlock chastity cage/belt, cum however you want. Play again within 7 days.",
        "Stay locked in chastity, ride dildo for 30 minutes or until anal orgasm (whichever comes first). Unlock chastity cage/belt after that.",
        "Unlock chastity cage/belt, edge 5 times with dildo in your ass, then cum and give yourself a facial.",
        "Unlock chastity cage/belt, cum however you want, reapply chastity for 48 hours.",
        "Stay locked in chastity, fuck your ass for 30 minutes while looking at Overwatch porn. After that, unlock chastity cage/belt and cum however you want."
    ];
    var game_end_punishments = [
        "Stay locked in chastity for 20 hours, then play again.",
        "Stay locked in chastity until tomorrow, then play again.",
        "Deepthroat dildo 60 times, ride for 10 minutes. You may unlock your chastity cage/belt after that.",
        "End game and stay locked in chastity for 5 days. Sleep with a buttplug in on at least one of those days.",
        "End game and stay locked in chastity for 7 days."
    ];

    // Force a specific "game" to load if this is set.
    // Intended for debugging purposes only!
    var force_specific_mission_load = false;

    // Keep track of the "games" played, to reduce
    // the poor slut's chance of having to play
    // the same game again and again
    var missions_completed = [];

    // Game objective counters
    var current_game_deaths = 0;
    var current_game_kills = 0;
    var current_game_rezzes = 0;
    var current_game_ults = 0;
    var other_objective_1_fulfilled = false;
    var other_objective_2_fulfilled = false;
    var current_game_counter_x = 0;
    var current_game_counter_threshold_met = false;

// ===================================================================

$(function(){

    // Wait for engine to properly initialize
    while(true){
        if(gameInitialized === true){
            break;
        }
    }

    // Game loaded
    $("#welcome_screen").fadeIn(100);

});

// ===================================================================

// Game start handlers
$("#mm_button_start_easy_mode").click(function(e){
    e.preventDefault();
    gameMode = "easy";
    scoremod_objfail_gamelost = -1;
    scoremod_objfail_gamewon = 1;
    scoremod_objpass_gamelost = 1;
    scoremod_objpass_gamewon = 2;
    $("#welcome_screen").fadeOut(100, function(){
        $("#engine_topbar").removeClass("bg-primary").addClass("bg-easymode");
        $("#engine_nav_button").html("Healslut's Journey <small>(easy)</small>");
        $("#engine_topbar").fadeIn(100);
        pregame_step_1();
    });
})

$("#mm_button_start_hard_mode").click(function(e){
    e.preventDefault();
    gameMode = "hard";
    scoremod_objfail_gamelost = -2;
    scoremod_objfail_gamewon = -1;
    scoremod_objpass_gamelost = -1;
    scoremod_objpass_gamewon = 1;
    $("#welcome_screen").fadeOut(100, function(){
        $("#engine_nav_button").html("Healslut's Journey <small>(hard)</small>");
        $("#engine_topbar").fadeIn(100);
        pregame_step_1();
    });
})

// ===================================================================

// Game "initialization" steps
function pregame_step_1(){
    showNotification("<h3>These are the stuff that you'll need to gather before starting the game:</h3><br /><div class='text-left'><ul><li>A paddle</li><li>Two or more dildos</li><li>An empty cup</li><li>Some fake cum (or milk) in a cup</li><li>Marker pen</li><li>A slave collar</li><li>A chastity belt or cage</li></ul></div>", buttonText = "Okay", buttonClass = "success", pregame_step_2);
}
function pregame_step_2(){
    showNotification("<h1><b>Lock</b> the collar around your neck. Make sure it's snug and tight!</h1>", buttonText = "I've done that", buttonClass = "success", pregame_step_3);
}
function pregame_step_3(){
    showNotification("<h1><b>Put on</b> and <b>lock</b> your chastity cage/belt</h1><br /><h3>Again, make sure that<br/>it's nice and tight!</h3>", buttonText = "I've done that too", buttonClass = "success", pregame_step_4);
}
function pregame_step_4(){
    showNotification("<h1>Start Overwatch.</h1><br /><h3>Remember, a good healslut picks Mercy on each and every match!</h3>", buttonText = "I'm ready to queue", buttonClass = "success", game_queue_wait_routine);
}

// While our slut is waiting for a game...
function game_queue_wait_routine(){
    resetMissionCounters();
    showNotification("<h1>Wait for your game.</h1>", buttonText = "I've got a game!", buttonClass = "info", ingame_start_routine);
}

// "Game start" routine
function ingame_start_routine(){

    // Pick a game at random. Don't pick "already-played" ones except there's nothing left:

    // If there's no more game available, reset
    if(missions_completed.length >= missions.length){
        missions_completed = [];
    }

    // If "locked" by the debugging variable:
    if(force_specific_mission_load !== false){
        var game = force_specific_mission_load;
        console.log("[DEBUG] forcing mission: " + game);
    }else{
        var game = null;
        while(true){
            // Pick a new game
            game = missions[Math.floor(Math.random()*missions.length)];
            if($.inArray(game, missions_completed) == -1){
                break;
            }
        }
        // Add that game to the "already played" list:
        console.log("GC: " + missions_completed.length + " | Starting mission: " + game);
        missions_completed.push(game);
    }

    // Init game
    current_game = game;
    window["game_init_" + game]();

}

// ===================================================================

// Reset mission counters
function resetMissionCounters(){
    current_game_deaths = 0;
    current_game_kills = 0;
    current_game_rezzes = 0;
    current_game_ults = 0;
    other_objective_1_fulfilled = false;
    other_objective_2_fulfilled = false;
    current_game_counter_x = 0;
    current_game_counter_threshold_met = false;
}

// Clean-up the mission and update the slut's score:
function cleanupMission(conditionOK = false, matchWon = false){

    $(".engine_screen").fadeOut(100);

    // Let's see what should we do with the slut's score:
    if(conditionOK === false && matchWon === false){
        current_score += scoremod_objfail_gamelost;
    }
    if(conditionOK === false && matchWon === true){
        current_score += scoremod_objfail_gamewon;
    }
    if(conditionOK === true && matchWon === false){
        current_score += scoremod_objpass_gamelost;
    }
    if(conditionOK === true && matchWon === true){
        current_score += scoremod_objpass_gamewon;
    }

    engine_checkScores();

}

// On game wrap-up, we decide the slut's fate:
function healslut_journey_trigger_game_lost(){
    showNotification("<h1>Game over,<br />you lose!</h1><br /><h5>Prepare yourself for some punishments!</h5>", buttonText = "I'm ready for my punishment", buttonClass = "danger", hsj_random_punishment);
}

function healslut_journey_trigger_game_won(){
    showNotification("<h1>Congratulations, you've won the game!</h1><br /><h5>Now who's ready for some rewards?</h5>", buttonText = "I'm ready!", buttonClass = "success", hsj_random_reward);
}

function hsj_random_punishment(){
    var punishment = game_end_punishments[Math.floor(Math.random()*game_end_punishments.length)];
    showNotification("<h5>Your punishment:</h5><br /><h3>" + punishment + "</h3>", buttonText = "End game", buttonClass = "info", hsj_reset_routine);
}

function hsj_random_reward(){
    var reward = game_end_rewards[Math.floor(Math.random()*game_end_rewards.length)];
    showNotification("<h5>Your reward:</h5><br /><h3>" + reward + "</h3>", buttonText = "End game", buttonClass = "info", hsj_reset_routine);
}

// Reset the game
// Quite simple, actually:
function hsj_reset_routine(){
    window.location.reload();
}
