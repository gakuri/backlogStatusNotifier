const { CanvasRenderService } = require('chartjs-node-canvas');
 
const width = 600;
const height = 400;
const chartCallback = (ChartJS: any) => {
    ChartJS.defaults.global.elements.rectangle.borderWidth = 2;
    //ChartJS.plugins.register({});
    //ChartJS.controllers.MyType = ChartJS.DatasetController.extend({});
};
const canvasRenderService = new CanvasRenderService(width, height, chartCallback);
 
export async function createChart(): Promise<string>{
    const configuration = {
        type: 'bar',
        data: {
            labels: ['5/6', '5/7', '5/8', '5/9', '5/10', '5/11', '5/12'],
            datasets: [{
                label: '# 残タスク',
                data: [12, 19, 3, 5, 2, 3, 2],
                backgroundColor: [
                    'rgba(255, 120, 152, 1)',
                    'rgba(255, 120, 152, 1)',
                    'rgba(255, 120, 152, 1)',
                    'rgba(255, 120, 152, 1)',
                    'rgba(255, 120, 152, 1)',
                    'rgba(255, 120, 152, 1)',
                    'rgba(255, 120, 152, 1)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                    'rgba(255,99,132,1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: (value : any) => '$' + value
                    }
                }]
            }
        }
    };
    return await canvasRenderService.renderToDataURL(configuration);
}