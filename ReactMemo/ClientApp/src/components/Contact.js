import React, { Component } from "react";
import { ContactDetails } from "./ContactDetails/ContactDetails";
import { SiteList } from './Shared/SiteList/SiteList';
import { TechList } from './Shared/TechList/TechList';

export class Contact extends Component {
    render(){
        const title = "연락처.";
        const message = "안녕하세요. ReactMemo 사이트입니다.";

        return (
            <div>
                <h2>{ title }</h2>
                <h3>{ message }</h3>
                
                <div className="mt-3">
                    <ContactDetails></ContactDetails>
                </div>

                <div class="alert alert-warning alert-dismissible fade show mt-5 mb-5" role="alert">
                    이 사이트 제작을 위한 모든 단계는 <strong>데브렉</strong>에서 동영상 강좌로 제공됩니다. 관심있으신 분들은 <a href="http://www.devlec.com" className="alert-link">데브렉 사이트</a>를 참조하시기 바랍니다.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>

                <div className='row mb-5'>
                    <div className='col-md-6'>
                        <h3><i className='fa fa-wrench'></i>현재 사이트에서 사용된 기술 리스트</h3>
                        <TechList></TechList>
                    </div>

                    <div className='col-md-6'>
                        <h3><i className='fa fa-sitemap'></i>현재 사이트와 관련된 추천 사이트</h3>
                        <SiteList></SiteList>
                    </div>
                </div>
            </div>
        );
    }
}