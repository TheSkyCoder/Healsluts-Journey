// Tit abuse =============================================================================================

var tit_abuse_match_result = false;
var tit_abuse_condition_two_gold_medals = false;

function game_init_tit_abuse(){
    console.log("[Tit abuse] starting...");
    show_mission_screen("Tit abuse", "Play with your nipples while waiting for the game to start, then play normally. Pinch your nipples if you don't have either a damage or healing beam on someone, and squeeze your breasts if your beam target dies.");
}
function on_death_tit_abuse(){
    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Slap your face 10 times.</span>");
    current_game_deaths += 1;
}
function on_rez_tit_abuse(){
    current_game_rezzes += 1;
    showConditionalInstruction("Good slut. Now spit onto your chest.");
}
function on_kill_tit_abuse(){
    showConditionalInstruction("Great kill!");
    current_game_kills += 1;
}
function on_ult_tit_abuse(){
    showConditionalInstruction("Nice!");
    current_game_ults += 1;
}
function on_mission_end_tit_abuse(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", tit_abuse_mission_end_q1);
}
function tit_abuse_mission_end_q1(match_result){
    tit_abuse_match_result = match_result;
    askQuestion("Did you get at least two gold medals?", tit_abuse_mission_end_q2);
}
function tit_abuse_mission_end_q2(two_gold_medals){
    tit_abuse_condition_two_gold_medals = two_gold_medals;
    askQuestion("Did you lactate during the match?", tit_abuse_mission_end_handler);
}
function tit_abuse_mission_end_handler(lactation_result){
    // Check conditions:
    if(tit_abuse_condition_two_gold_medals === true || lactation_result === true){
        var conditionOK = true;
    }else{
        var conditionOK = false;
    }
    cleanupMission(conditionOK, tit_abuse_match_result);
}
// =======================================================================================================
