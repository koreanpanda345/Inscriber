/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :
 * @createdOn      :  11/14/2020
 * @description    :  This is the index barrel file. This Bundles the files,
 * and makes it were the user can call on the src folder for these classes.
 * @since          :  11/21/2020
 * @license
 * Copyright 2020 Cody Spratford. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file in the root directory of this source tree.
 *========================================================================**/

// LINK src\Inscriber.ts
export * from "./Inscriber";
// LINK src\builders\InscriberConfigBuilder.ts
export * from "./builders/InscriberConfigBuilder";
export * from "./builders/CustomLogBuilder";
// LINK src\global.ts
export { Config } from "./global";

/**========================================================================
 *                           SECTION Tasks
 *========================================================================**/

/**========================================================================
 *                             TODO LIST
 *  - [1] TODO Add integration to Node.js, to redirect the errors and events to inscriber.
 *  - [2] TODO Add warn and debug methods.
 * 	- [3] TODO Make it where you can use the Config Builder as the Config File.
 *
 *
 *========================================================================**/
/**========================================================================
 *                            COMPLETED Tasks
 *  - COMPLETED Custom Logs
 * 		- SINCE 11/21/2020
 *  - COMPLETED Overwrite config file with Config Builder.
 * 		- SINCE 11/19/2020
 * 	-
 *========================================================================**/
/**========================================================================
 *							  BUG Report
 *	- BUG
 *		- SINCE
 *		- LINK
 *
 *========================================================================**/
/**========================================================================
 *                           FIXME Tasks
 * 	- FIXME
 *  	- SINCE
 * 		- LINK
 *========================================================================**/
/**========================================================================
 *                           !SECTION Tasks
 *========================================================================**/
