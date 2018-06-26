// Gag on it =============================================================================================

var gag_on_it_match_result = false;

function game_init_gag_on_it(){
    console.log("[Gag on it] starting...");
    show_mission_screen("Gag on it", "Your dildo may not leave your mouth for the entire game. Deepthroat the dildo once when your beam target gets a kill.");
}
function on_death_gag_on_it(){
    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Deepthroat the dildo for 15 times.</span>");
    current_game_deaths += 1;
}
function on_rez_gag_on_it(){
    current_game_rezzes += 1;
    showConditionalInstruction("Good slut. Now deepthroat the dildo once.");
}
function on_kill_gag_on_it(){
    showConditionalInstruction("Noted.");
    current_game_kills += 1;
}
function on_ult_gag_on_it(){
    showConditionalInstruction("Deepthroat the dildo once.");
    current_game_ults += 1;
}
function on_mission_end_gag_on_it(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", gag_on_it_mission_end_q1);
}
function gag_on_it_mission_end_q1(match_result){
    gag_on_it_match_result = match_result;
    askQuestion("Did you get at least 3 gold medals?", gag_on_it_mission_end_handler);
}
function gag_on_it_mission_end_handler(medal_result){
    // Check conditions:
    if(current_game_deaths <= 5 || medal_result === true){
        var conditionOK = true;
    }else{
        var conditionOK = false;
    }
    cleanupMission(conditionOK, gag_on_it_match_result);
}
// =======================================================================================================
