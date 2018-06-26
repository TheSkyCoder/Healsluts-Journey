// Slut it up ============================================================================================

var slut_it_up_match_result = false;

function game_init_slut_it_up(){
    console.log("[Slut it up] starting...");
    show_mission_screen("Slut it up", "Finger and grope yourself whenever possible.");
}
function on_death_slut_it_up(){
    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Slap your face and moan your killer's name, begging them to be more gentle with you.</span>");
    current_game_deaths += 1;
}
function on_rez_slut_it_up(){
    current_game_rezzes += 1;
    showConditionalInstruction("Good slut. Moan the character's name and beg them to fuck you.");
}
function on_kill_slut_it_up(){
    showConditionalInstruction("Noted.");
    current_game_kills += 1;
}
function on_ult_slut_it_up(){
    showConditionalInstruction("Ultimate ability use logged.");
    current_game_ults += 1;
}
function on_mission_end_slut_it_up(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", slut_it_up_mission_end_q1);
}
function slut_it_up_mission_end_q1(match_result){
    slut_it_up_match_result = match_result;
    askQuestion("Did you get play of the game?", slut_it_up_mission_end_handler);
}
function slut_it_up_mission_end_handler(potg_result){
    // Check conditions:
    if(current_game_rezzes >= 10 || potg_result === true){
        var conditionOK = true;
    }else{
        var conditionOK = false;
    }
    cleanupMission(conditionOK, slut_it_up_match_result);
}
// =======================================================================================================
