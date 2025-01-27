@echo off
setlocal EnableDelayedExpansion

:: Create directory structure
mkdir src\app 2>nul
mkdir src\components\ui\card 2>nul

:: Create page.js
(
echo import PGPKeyGenerator from '../components/PGPKeyGenerator';
echo.
echo export default function Home() {
echo   return ^(
echo     ^<main^>
echo       ^<PGPKeyGenerator /^>
echo     ^</main^>
echo   ^);
echo }
) > src\app\page.js

:: Create card/index.js
(
echo export const Card = ^(^{ className, ...props ^}^) =^> ^(
echo   ^<div className={`rounded-lg ${className}`} {...props} /^>
echo ^);
echo.
echo export const CardHeader = ^(^{ className, ...props ^}^) =^> ^(
echo   ^<div className={`p-6 ${className}`} {...props} /^>
echo ^);
echo.
echo export const CardContent = ^(^{ className, ...props ^}^) =^> ^(
echo   ^<div className={`p-6 pt-0 ${className}`} {...props} /^>
echo ^);
echo.
echo export const CardTitle = ^(^{ className, ...props ^}^) =^> ^(
echo   ^<h3 className={`text-2xl font-semibold ${className}`} {...props} /^>
echo ^);
) > src\components\ui\card\index.js

:: Create PGPKeyGenerator.js
(
echo import React, { useState } from 'react';
echo import { Card, CardHeader, CardContent } from '@/components/ui/card';
echo import { Lock, Copy, Download } from 'lucide-react';
:: ... rest of PGPKeyGenerator.js content ...
) > src\components\PGPKeyGenerator.js

echo All files and directories have been created!
echo Directory structure:
tree src\

pause
