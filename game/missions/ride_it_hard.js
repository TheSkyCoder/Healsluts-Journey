// Ride it hard ==========================================================================================

var ride_it_hard_match_result = false;
var ride_it_hard_gold_medal_result = false;

function game_init_ride_it_hard(){
    console.log("[Ride it hard] starting...");
    show_mission_screen("Ride it hard", "Sit down on your thickest dildo.<br /><ul><li>When you have a damage beam on, ride once every two seconds.</li><li>When you have a healing beam on, ride once (or more) every second</li></ul>");
}
function on_death_ride_it_hard(){
    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Stop riding until you get another beam going.</span>");
    current_game_deaths += 1;
}
function on_rez_ride_it_hard(){
    current_game_rezzes += 1;
    showConditionalInstruction("Good job, slut.");
}
function on_kill_ride_it_hard(){
    showConditionalInstruction("Noted.");
    current_game_kills += 1;
}
function on_ult_ride_it_hard(){
    showConditionalInstruction("Noted.");
    current_game_ults += 1;
}
function on_mission_end_ride_it_hard(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", ride_it_hard_mission_end_q1);
}
function ride_it_hard_mission_end_q1(match_result){
    ride_it_hard_match_result = match_result;
    askQuestion("Did you get play of the game?", ride_it_hard_mission_end_handler);
}
function ride_it_hard_mission_end_handler(potg_result){
    // Check conditions:
    if(current_game_deaths <= 3 || potg_result === true){
        var conditionOK = true;
    }else{
        var conditionOK = false;
    }
    cleanupMission(conditionOK, ride_it_hard_match_result);
}
// =======================================================================================================
