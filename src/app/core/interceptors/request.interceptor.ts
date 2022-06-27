import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        request = request.clone({
            url: request.url.replace('http://', 'https://'), // 使用安全SSL链接
            headers: request.headers.set("custom-header", "token") // 修改http header 增加token
        });
        return next.handle(request);
    }
}
