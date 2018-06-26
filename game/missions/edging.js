// Edging ================================================================================================

var edging_match_result = false;
var edging_medal_result = false;

function game_init_edging(){
    console.log("[Edging] starting...");
    show_mission_screen("Edging", "Unlock your chastity cage/belt. Get close to edging and stay close to the edge.<br />After the game, remember to relock your chastity cage/belt - you are not allowed to cum!");
}
function on_death_edging(){
    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Jack off as fast as you can. Don't leave the spawn area until you edge.</span>");
    current_game_deaths += 1;
}
function on_rez_edging(){
    current_game_rezzes += 1;
    showConditionalInstruction("Noted.");
}
function on_kill_edging(){
    showConditionalInstruction("Noted.");
    current_game_kills += 1;
}
function on_ult_edging(){
    showConditionalInstruction("Lick up all the precum you can.");
    current_game_ults += 1;
}
function on_mission_end_edging(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", edging_mission_end_q1);
}
function edging_mission_end_q1(match_result){
    edging_match_result = match_result;
    askQuestion("Did you get at least two gold medals?", edging_mission_end_q2);
}
function edging_mission_end_q2(medal_result){
    edging_medal_result = medal_result;
    askQuestion("Did you get play of the game?", edging_mission_end_handler);
}
function edging_mission_end_handler(potg_result){
    // Check conditions:
    if(edging_medal_result === true || potg_result === true){
        var conditionOK = true;
    }else{
        var conditionOK = false;
    }
    cleanupMission(conditionOK, edging_match_result);
}
// =======================================================================================================
