/**========================================================================
 * ?                                ABOUT
 * @author         :  Cody Spratford
 * @email          :  koreanpanda345@gmail.com
 * @repo           :
 * @createdOn      :  11/14/2020
 * @description    :  This is the index barrel file. This Bundles the files,
 * and makes it were the user can call on the src folder for these classes.
 *
 * @license
 * Copyright 2020 Cody Spratford. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file in the root directory of this source tree.
 *========================================================================**/

import { Inscriber } from "./Inscriber";

// LINK src\Inscriber.ts
export * from "./Inscriber";
// LINK src\builders\InscriberConfigBuilder.ts
export * from "./builders/InscriberConfigBuilder";
// LINK src\global.ts
export { Config } from "./global";

/**========================================================================
 *                             TODO LIST
 *  - TODO Add integration to Node.js, to redirect the errors and events to inscriber.
 *  - TODO Add warn and debug methods.
 * 	- TODO Make it where you can use the Config Builder as the Config File.
 *
 *
 *========================================================================**/
