// Suck Them All =========================================================================================

var suck_them_all_match_result = false;

function game_init_suck_them_all(){
    console.log("[Suck them all] starting...");
    show_mission_screen("Suck them all", "Grab every dildo you've got and put them on the table. Once you use one, you may not use it again until all others are used.");
}
function on_death_suck_them_all(){
    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Suck a dildo until you respawn.</span>");
    current_game_deaths += 1;
}
function on_rez_suck_them_all(){
    current_game_rezzes += 1;
    showConditionalInstruction("Good slut. Now deepthroat your dildo.");
}
function on_kill_suck_them_all(){
    showConditionalInstruction("Noted.");
    current_game_kills += 1;
}
function on_ult_suck_them_all(){
    showConditionalInstruction("Deepthroat your dildo once.");
    current_game_ults += 1;
}
function on_mission_end_suck_them_all(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", suck_them_all_mission_end_q1);
}
function suck_them_all_mission_end_q1(match_result){
    suck_them_all_match_result = match_result;
    askQuestion("Did you get at least one gold medal?", suck_them_all_mission_end_handler);
}
function suck_them_all_mission_end_handler(gold_medal_result){
    // Check conditions:
    if(current_game_rezzes >= 5 || gold_medal_result === true){
        var conditionOK = true;
    }else{
        var conditionOK = false;
    }
    cleanupMission(conditionOK, suck_them_all_match_result);
}
// =======================================================================================================
