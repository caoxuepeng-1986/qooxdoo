/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * This is the main application class of your custom application "test"
 *
 * @asset(test/*)
 * @asset(qx/mobile/icon/android/*)
 * @asset(qx/mobile/icon/ios/*)
 * @asset(qx/mobile/icon/common/*)
 * #asset(qx/mobile/icon/android/*)
 * #asset(qx/mobile/icon/ios/*)
 * #asset(qx/mobile/icon/common/*)
 */
qx.Class.define("test.Application",
{
  extend : qx.application.Standalone,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     *
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      qx.core.Environment.get("event.pointer");

      var carousel = new qx.ui.mobile.container.Carousel();
      var index = carousel.getShownPageIndex();
    }
  }
});
