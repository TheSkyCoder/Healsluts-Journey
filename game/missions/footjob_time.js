// Footjob time ==========================================================================================

var footjob_time_match_status = false;

function game_init_footjob_time(){
    console.log("[Footjob time] starting...");
    show_mission_screen("Footjob time", "Mount a dildo on your table and give it a nice footjob for the duration of the match.");
}
function on_death_footjob_time(){
    current_game_deaths += 1;
    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Deepthroat the dildo.</span>");
}
function on_rez_footjob_time(){
    current_game_rezzes += 1;
    showConditionalInstruction("Noted. You've resurrected " + current_game_rezzes + " teammate(s) this match.");
}
function on_kill_footjob_time(){
    current_game_kills += 1;
    showConditionalInstruction("Spit onto your dildo.");
}
function on_ult_footjob_time(){
    current_game_ults += 1;
    showConditionalInstruction("Good slut. Now suck on your toes for the duration of the ult!");
}
function on_mission_end_footjob_time(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", footjob_time_potg_question_handler);
}
function footjob_time_potg_question_handler(match_result){
    footjob_time_match_status = match_result;
    askQuestion("Did you get play of the game?", footjob_time_mission_end_handler);
}
function footjob_time_mission_end_handler(potg_result){
    // Check conditions:
    if(potg_result === true || current_game_ults >= 4){
        var conditionOK = true;
    }else{
        var conditionOK = false;
    }
    cleanupMission(conditionOK, footjob_time_match_status);
}
// =======================================================================================================
