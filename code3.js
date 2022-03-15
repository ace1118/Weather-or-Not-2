gdjs.SAES_32BalitaCode = {};
gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1= [];
gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects2= [];
gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects3= [];
gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1= [];
gdjs.SAES_32BalitaCode.GDplay_95pauseObjects2= [];
gdjs.SAES_32BalitaCode.GDplay_95pauseObjects3= [];
gdjs.SAES_32BalitaCode.GDforwardObjects1= [];
gdjs.SAES_32BalitaCode.GDforwardObjects2= [];
gdjs.SAES_32BalitaCode.GDforwardObjects3= [];
gdjs.SAES_32BalitaCode.GDbackwardObjects1= [];
gdjs.SAES_32BalitaCode.GDbackwardObjects2= [];
gdjs.SAES_32BalitaCode.GDbackwardObjects3= [];
gdjs.SAES_32BalitaCode.GDNewObjectObjects1= [];
gdjs.SAES_32BalitaCode.GDNewObjectObjects2= [];
gdjs.SAES_32BalitaCode.GDNewObjectObjects3= [];

gdjs.SAES_32BalitaCode.conditionTrue_0 = {val:false};
gdjs.SAES_32BalitaCode.condition0IsTrue_0 = {val:false};
gdjs.SAES_32BalitaCode.condition1IsTrue_0 = {val:false};
gdjs.SAES_32BalitaCode.condition2IsTrue_0 = {val:false};
gdjs.SAES_32BalitaCode.conditionTrue_1 = {val:false};
gdjs.SAES_32BalitaCode.condition0IsTrue_1 = {val:false};
gdjs.SAES_32BalitaCode.condition1IsTrue_1 = {val:false};
gdjs.SAES_32BalitaCode.condition2IsTrue_1 = {val:false};


gdjs.SAES_32BalitaCode.eventsList0 = function(runtimeScene) {

{


{
}

}


};gdjs.SAES_32BalitaCode.mapOfGDgdjs_46SAES_9532BalitaCode_46GDplay_9595pauseObjects1Objects = Hashtable.newFrom({"play_pause": gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1});gdjs.SAES_32BalitaCode.eventsList1 = function(runtimeScene) {

{


gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
{gdjs.SAES_32BalitaCode.conditionTrue_1 = gdjs.SAES_32BalitaCode.condition0IsTrue_0;
gdjs.SAES_32BalitaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(58831300);
}
}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}

}


};gdjs.SAES_32BalitaCode.mapOfGDgdjs_46SAES_9532BalitaCode_46GDplay_9595pauseObjects1Objects = Hashtable.newFrom({"play_pause": gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1});gdjs.SAES_32BalitaCode.mapOfGDgdjs_46SAES_9532BalitaCode_46GDplay_9595pauseObjects1Objects = Hashtable.newFrom({"play_pause": gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1});gdjs.SAES_32BalitaCode.mapOfGDgdjs_46SAES_9532BalitaCode_46GDforwardObjects2Objects = Hashtable.newFrom({"forward": gdjs.SAES_32BalitaCode.GDforwardObjects2});gdjs.SAES_32BalitaCode.eventsList2 = function(runtimeScene) {

{


gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects2);
{for(var i = 0, len = gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects2.length ;i < len;++i) {
    gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects2[i].setCurrentTime((gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects2[i].getCurrentTime()) + 10);
}
}}

}


};gdjs.SAES_32BalitaCode.mapOfGDgdjs_46SAES_9532BalitaCode_46GDforwardObjects2Objects = Hashtable.newFrom({"forward": gdjs.SAES_32BalitaCode.GDforwardObjects2});gdjs.SAES_32BalitaCode.mapOfGDgdjs_46SAES_9532BalitaCode_46GDbackwardObjects2Objects = Hashtable.newFrom({"backward": gdjs.SAES_32BalitaCode.GDbackwardObjects2});gdjs.SAES_32BalitaCode.eventsList3 = function(runtimeScene) {

{


gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects2);
{for(var i = 0, len = gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects2.length ;i < len;++i) {
    gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects2[i].setCurrentTime((gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects2[i].getCurrentTime()) - 10);
}
}}

}


};gdjs.SAES_32BalitaCode.mapOfGDgdjs_46SAES_9532BalitaCode_46GDbackwardObjects1Objects = Hashtable.newFrom({"backward": gdjs.SAES_32BalitaCode.GDbackwardObjects1});gdjs.SAES_32BalitaCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("forward"), gdjs.SAES_32BalitaCode.GDforwardObjects2);

gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SAES_32BalitaCode.mapOfGDgdjs_46SAES_9532BalitaCode_46GDforwardObjects2Objects, runtimeScene, true, false);
}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SAES_32BalitaCode.GDforwardObjects2 */
{for(var i = 0, len = gdjs.SAES_32BalitaCode.GDforwardObjects2.length ;i < len;++i) {
    gdjs.SAES_32BalitaCode.GDforwardObjects2[i].setOpacity(255);
}
}
{ //Subevents
gdjs.SAES_32BalitaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("forward"), gdjs.SAES_32BalitaCode.GDforwardObjects2);

gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SAES_32BalitaCode.mapOfGDgdjs_46SAES_9532BalitaCode_46GDforwardObjects2Objects, runtimeScene, true, true);
}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SAES_32BalitaCode.GDforwardObjects2 */
{for(var i = 0, len = gdjs.SAES_32BalitaCode.GDforwardObjects2.length ;i < len;++i) {
    gdjs.SAES_32BalitaCode.GDforwardObjects2[i].setOpacity(50);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("backward"), gdjs.SAES_32BalitaCode.GDbackwardObjects2);

gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SAES_32BalitaCode.mapOfGDgdjs_46SAES_9532BalitaCode_46GDbackwardObjects2Objects, runtimeScene, true, false);
}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SAES_32BalitaCode.GDbackwardObjects2 */
{for(var i = 0, len = gdjs.SAES_32BalitaCode.GDbackwardObjects2.length ;i < len;++i) {
    gdjs.SAES_32BalitaCode.GDbackwardObjects2[i].setOpacity(255);
}
}
{ //Subevents
gdjs.SAES_32BalitaCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("backward"), gdjs.SAES_32BalitaCode.GDbackwardObjects1);

gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SAES_32BalitaCode.mapOfGDgdjs_46SAES_9532BalitaCode_46GDbackwardObjects1Objects, runtimeScene, true, true);
}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SAES_32BalitaCode.GDbackwardObjects1 */
{for(var i = 0, len = gdjs.SAES_32BalitaCode.GDbackwardObjects1.length ;i < len;++i) {
    gdjs.SAES_32BalitaCode.GDbackwardObjects1[i].setOpacity(50);
}
}}

}


};gdjs.SAES_32BalitaCode.mapOfGDgdjs_46SAES_9532BalitaCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.SAES_32BalitaCode.GDNewObjectObjects1});gdjs.SAES_32BalitaCode.eventsList5 = function(runtimeScene) {

{


gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1);

gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1.length;i<l;++i) {
    if ( gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1[i].isEnded() ) {
        gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = true;
        gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1[k] = gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1[i];
        ++k;
    }
}
gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1.length = k;}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}
{ //Subevents
gdjs.SAES_32BalitaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1[i].play();
}
}}

}


{


gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1[i].pause();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1);

gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
gdjs.SAES_32BalitaCode.condition1IsTrue_0.val = false;
{
gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SAES_32BalitaCode.mapOfGDgdjs_46SAES_9532BalitaCode_46GDplay_9595pauseObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SAES_32BalitaCode.condition0IsTrue_0.val ) {
{
gdjs.SAES_32BalitaCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SAES_32BalitaCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.SAES_32BalitaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}}

}


{


gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1);
{for(var i = 0, len = gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1[i].setAnimationName("play");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1);

gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1.length;i<l;++i) {
    if ( gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1[i].isCurrentAnimationName("play") ) {
        gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = true;
        gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1[k] = gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1[i];
        ++k;
    }
}
gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1.length = k;}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1[i].pause();
}
}}

}


{


gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1);
{for(var i = 0, len = gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1[i].setAnimationName("pause");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1);

gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1.length;i<l;++i) {
    if ( gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1[i].isCurrentAnimationName("pause") ) {
        gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = true;
        gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1[k] = gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1[i];
        ++k;
    }
}
gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1.length = k;}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SAES_balita"), gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1);
{for(var i = 0, len = gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1.length ;i < len;++i) {
    gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1);

gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SAES_32BalitaCode.mapOfGDgdjs_46SAES_9532BalitaCode_46GDplay_9595pauseObjects1Objects, runtimeScene, true, false);
}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1 */
{for(var i = 0, len = gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_pause"), gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1);

gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
{
gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SAES_32BalitaCode.mapOfGDgdjs_46SAES_9532BalitaCode_46GDplay_9595pauseObjects1Objects, runtimeScene, true, true);
}if (gdjs.SAES_32BalitaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1 */
{for(var i = 0, len = gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1.length ;i < len;++i) {
    gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1[i].setOpacity(100);
}
}}

}


{


gdjs.SAES_32BalitaCode.eventsList4(runtimeScene);
}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.SAES_32BalitaCode.GDNewObjectObjects1);

gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = false;
gdjs.SAES_32BalitaCode.condition1IsTrue_0.val = false;
{
gdjs.SAES_32BalitaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SAES_32BalitaCode.mapOfGDgdjs_46SAES_9532BalitaCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SAES_32BalitaCode.condition0IsTrue_0.val ) {
{
gdjs.SAES_32BalitaCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.SAES_32BalitaCode.condition1IsTrue_0.val) {
{gdjs.screenshot.takeScreenshot(runtimeScene, gdjs.fileSystem.getDocumentsPath(runtimeScene) + gdjs.fileSystem.getPathDelimiter() + "WeatherOrNot.png");
}}

}


{


{
}

}


};

gdjs.SAES_32BalitaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects1.length = 0;
gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects2.length = 0;
gdjs.SAES_32BalitaCode.GDSAES_95balitaObjects3.length = 0;
gdjs.SAES_32BalitaCode.GDplay_95pauseObjects1.length = 0;
gdjs.SAES_32BalitaCode.GDplay_95pauseObjects2.length = 0;
gdjs.SAES_32BalitaCode.GDplay_95pauseObjects3.length = 0;
gdjs.SAES_32BalitaCode.GDforwardObjects1.length = 0;
gdjs.SAES_32BalitaCode.GDforwardObjects2.length = 0;
gdjs.SAES_32BalitaCode.GDforwardObjects3.length = 0;
gdjs.SAES_32BalitaCode.GDbackwardObjects1.length = 0;
gdjs.SAES_32BalitaCode.GDbackwardObjects2.length = 0;
gdjs.SAES_32BalitaCode.GDbackwardObjects3.length = 0;
gdjs.SAES_32BalitaCode.GDNewObjectObjects1.length = 0;
gdjs.SAES_32BalitaCode.GDNewObjectObjects2.length = 0;
gdjs.SAES_32BalitaCode.GDNewObjectObjects3.length = 0;

gdjs.SAES_32BalitaCode.eventsList5(runtimeScene);
return;

}

gdjs['SAES_32BalitaCode'] = gdjs.SAES_32BalitaCode;
