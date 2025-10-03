gdjs.ESS_32WelcomeCode = {};
gdjs.ESS_32WelcomeCode.localVariables = [];
gdjs.ESS_32WelcomeCode.GDBackgroundObjects1= [];
gdjs.ESS_32WelcomeCode.GDBackgroundObjects2= [];
gdjs.ESS_32WelcomeCode.GDBackgroundObjects3= [];
gdjs.ESS_32WelcomeCode.GDDialogue_9595BoxObjects1= [];
gdjs.ESS_32WelcomeCode.GDDialogue_9595BoxObjects2= [];
gdjs.ESS_32WelcomeCode.GDDialogue_9595BoxObjects3= [];
gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects1= [];
gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects2= [];
gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects3= [];
gdjs.ESS_32WelcomeCode.GDDialogueObjects1= [];
gdjs.ESS_32WelcomeCode.GDDialogueObjects2= [];
gdjs.ESS_32WelcomeCode.GDDialogueObjects3= [];


gdjs.ESS_32WelcomeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "dialogue bleeps.wav", 1, false, 50, 1);
}}

}


};gdjs.ESS_32WelcomeCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrollText") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}
{ //Subevents
gdjs.ESS_32WelcomeCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "L1", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


};gdjs.ESS_32WelcomeCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "L2", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "home and ess.wav", 0, true, 20, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.advancedWindow.maximize(true, runtimeScene);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.ESS_32WelcomeCode.GDDialogueObjects1);
{for(var i = 0, len = gdjs.ESS_32WelcomeCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.ESS_32WelcomeCode.GDDialogueObjects1[i].hide();
}
}{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "ESS Welcome");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Iris_Transition"), gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects1.length;i<l;++i) {
    if ( gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects1[k] = gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects1[i];
        ++k;
    }
}
gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.ESS_32WelcomeCode.GDDialogueObjects1);
/* Reuse gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects1 */
{for(var i = 0, len = gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects1.length ;i < len;++i) {
    gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ESS_32WelcomeCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.ESS_32WelcomeCode.GDDialogueObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}{gdjs.dialogueTree.startFrom("Start");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.ESS_32WelcomeCode.GDDialogueObjects1);
{for(var i = 0, len = gdjs.ESS_32WelcomeCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.ESS_32WelcomeCode.GDDialogueObjects1[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.ESS_32WelcomeCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("Finished");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Endoscopy Superstore", false);
}}

}


};

gdjs.ESS_32WelcomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ESS_32WelcomeCode.GDBackgroundObjects1.length = 0;
gdjs.ESS_32WelcomeCode.GDBackgroundObjects2.length = 0;
gdjs.ESS_32WelcomeCode.GDBackgroundObjects3.length = 0;
gdjs.ESS_32WelcomeCode.GDDialogue_9595BoxObjects1.length = 0;
gdjs.ESS_32WelcomeCode.GDDialogue_9595BoxObjects2.length = 0;
gdjs.ESS_32WelcomeCode.GDDialogue_9595BoxObjects3.length = 0;
gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects1.length = 0;
gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects2.length = 0;
gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects3.length = 0;
gdjs.ESS_32WelcomeCode.GDDialogueObjects1.length = 0;
gdjs.ESS_32WelcomeCode.GDDialogueObjects2.length = 0;
gdjs.ESS_32WelcomeCode.GDDialogueObjects3.length = 0;

gdjs.ESS_32WelcomeCode.eventsList2(runtimeScene);
gdjs.ESS_32WelcomeCode.GDBackgroundObjects1.length = 0;
gdjs.ESS_32WelcomeCode.GDBackgroundObjects2.length = 0;
gdjs.ESS_32WelcomeCode.GDBackgroundObjects3.length = 0;
gdjs.ESS_32WelcomeCode.GDDialogue_9595BoxObjects1.length = 0;
gdjs.ESS_32WelcomeCode.GDDialogue_9595BoxObjects2.length = 0;
gdjs.ESS_32WelcomeCode.GDDialogue_9595BoxObjects3.length = 0;
gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects1.length = 0;
gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects2.length = 0;
gdjs.ESS_32WelcomeCode.GDIris_9595TransitionObjects3.length = 0;
gdjs.ESS_32WelcomeCode.GDDialogueObjects1.length = 0;
gdjs.ESS_32WelcomeCode.GDDialogueObjects2.length = 0;
gdjs.ESS_32WelcomeCode.GDDialogueObjects3.length = 0;


return;

}

gdjs['ESS_32WelcomeCode'] = gdjs.ESS_32WelcomeCode;
