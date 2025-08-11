/**
 * Google Apps Script para manejar envíos del formulario de contacto
 * Este script debe ser desplegado en Google Apps Script y conectado a una Google Sheet
 */

function doPost(e) {
  try {
    // Obtener la hoja de cálculo activa
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Si no hay headers, agregarlos
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 5).setValues([
        ['Timestamp', 'Nombre', 'Email', 'Teléfono', 'Mensaje']
      ]);
      
      // Formatear headers
      const headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
    }
    
    // Parsear los datos del formulario
    const data = JSON.parse(e.postData.contents);
    
    // Validar datos requeridos
    if (!data.nombre || !data.email || !data.mensaje) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: 'Campos requeridos faltantes'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Preparar la fila de datos
    const rowData = [
      data.timestamp || new Date().toLocaleString('es-AR', {
        timeZone: 'America/Argentina/Buenos_Aires'
      }),
      data.nombre,
      data.email,
      data.telefono || 'No proporcionado',
      data.mensaje
    ];
    
    // Agregar la fila a la hoja
    sheet.appendRow(rowData);
    
    // Auto-ajustar el ancho de las columnas
    sheet.autoResizeColumns(1, 5);
    
    // Respuesta exitosa
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Datos guardados correctamente'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log del error para debugging
    console.error('Error en doPost:', error);
    
    // Respuesta de error
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: 'Error interno del servidor: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Función opcional para probar el script
 */
function testScript() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toLocaleString('es-AR'),
        nombre: 'Test Usuario',
        email: 'test@ejemplo.com',
        telefono: '+54 9 11 1234-5678',
        mensaje: 'Este es un mensaje de prueba'
      })
    }
  };
  
  const result = doPost(testData);
  console.log('Resultado del test:', result.getContent());
}

/**
 * Función para configurar triggers automáticos (opcional)
 */
function createTriggers() {
  // Crear trigger para ejecutar cuando se recibe un POST
  ScriptApp.newTrigger('doPost')
    .timeBased()
    .everyMinutes(1)
    .create();
}
