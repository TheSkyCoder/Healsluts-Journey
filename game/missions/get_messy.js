// Get messy =============================================================================================

var get_messy_match_result = false;

function game_init_get_messy(){
    console.log("[Get messy] starting...");
    show_mission_screen("Get messy", "Get an empty cup ready. Don't swallow any spit, save it up.");
}
function on_death_get_messy(){
    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Smear the saliva all over yourself while waiting to respawn.</span>");
    current_game_deaths += 1;
}
function on_rez_get_messy(){
    current_game_rezzes += 1;
    showConditionalInstruction("Good slut. Now spit into the cup. Be sure to keep track of how full the cup is!");
}
function on_kill_get_messy(){
    showConditionalInstruction("Spit into the cup. Be sure to keep track of how full the cup is!");
    current_game_kills += 1;
}
function on_ult_get_messy(){
    showConditionalInstruction("Pour cup onto your face and chest now!");
    current_game_ults += 1;
}
function on_mission_end_get_messy(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", get_messy_mission_end_q1);
}
function get_messy_mission_end_q1(match_result){
    get_messy_match_result = match_result;
    askQuestion("Did you have your cup completely filled at some point during the game?", get_messy_mission_end_handler);
}
function get_messy_mission_end_handler(cup_filled_result){
    // Check conditions:
    if(current_game_deaths <= 2 || cup_filled_result === true){
        var conditionOK = true;
    }else{
        var conditionOK = false;
    }
    cleanupMission(conditionOK, get_messy_match_result);
}
// =======================================================================================================
