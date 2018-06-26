// Resurrection slut =====================================================================================

function game_init_resurrection_slut(){
    console.log("[Resurrection slut] starting...");
    show_mission_screen("Resurrection slut", "Play normally. Each time any of your teammates die, pinch your nipples until they've respawned or resurrected. <br />Your objective is to resurrect more than 3 times of your death count (or at the very least, resurrect at least 10 times).");
}
function on_death_resurrection_slut(){
    showConditionalInstruction("Bad slut!");
    current_game_deaths += 1;
}
function on_rez_resurrection_slut(){
    current_game_rezzes += 1;
    showConditionalInstruction("Good job, slut!<br />Current resurrection count: " + current_game_rezzes);
}
function on_kill_resurrection_slut(){
    showConditionalInstruction("Nice kill!");
    current_game_kills += 1;
}
function on_ult_resurrection_slut(){
    showConditionalInstruction("Nice!");
    current_game_ults += 1;
}
function on_mission_end_resurrection_slut(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", resurrection_slut_mission_end_handler);
}
function resurrection_slut_mission_end_handler(match_result){
    // Check conditions:
    if(current_game_rezzes >= 10 || current_game_rezzes > parseInt(current_game_deaths) * 3){
        var conditionOK = true;
    }else{
        var conditionOK = false;
    }
    cleanupMission(conditionOK, match_result);
}
// =======================================================================================================
